import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChatMessage, ICVAnalizarResponse } from '../../core/interfaces/ichat-response.interface';
import { CvAnalizerService } from '../../core/services/cv-analizer';

@Component({
  selector: 'app-cv-analizer',
  imports: [
   CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  templateUrl: './cv-analizer.html',
  styleUrl: './cv-analizer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CvAnalizer {
  private readonly _cvAnalizerService = inject(CvAnalizerService);

  messages = signal<ChatMessage[]>([
    {
      type: 'bot',
      content:
        '👋 ¡Hola! Soy tu asistente de análisis de CVs. Sube un PDF y te daré un análisis completo.',
      timestamp: new Date(),
    },
  ]);

  isAnalyzing = signal(false);

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (!file.name.toLowerCase().endsWith('.pdf')) {
      this.addBotMessage('❌ Por favor, sube solo archivos PDF.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.addBotMessage('❌ El archivo es muy grande. Máximo 5MB.');
      return;
    }

    this.analyzeCV(file);
  }

  private analyzeCV(file: File): void {
    this.messages.update((msgs) => [
      ...msgs,
      {
        type: 'user',
        content: `📄 ${file.name}`,
        timestamp: new Date(),
        fileName: file.name,
      },
    ]);

    this.messages.update((msgs) => [
      ...msgs,
      {
        type: 'loading',
        content: 'Analizando CV...',
        timestamp: new Date(),
      },
    ]);

    this.isAnalyzing.set(true);

    this._cvAnalizerService.postAnaliceCv(file).subscribe({
      next: (response) => {
        this.messages.update((msgs) => msgs.filter((m) => m.type !== 'loading'));
        this.messages.update((msgs) => [
          ...msgs,
          {
            type: 'bot',
            content: this.formatAnalysisResponse(response),
            timestamp: new Date(),
            data: response,
          },
        ]);

        this.isAnalyzing.set(false);
      },
      error: (error) => {
        this.messages.update((msgs) => msgs.filter((m) => m.type !== 'loading'));
        this.addBotMessage(
          `❌ Error al analizar CV: ${error.error?.detail || 'Intenta nuevamente'}`
        );
        this.isAnalyzing.set(false);
      },
    });
  }

  private formatAnalysisResponse(data: ICVAnalizarResponse): string {
    const status = data.is_valid_candidate ? '✅ ACEPTADO' : '❌ NO CUMPLE';
    return `
        ### ${status}
        **Score:** ${data.overall_score}/10
        **Experiencia:** ${data.years_experience} años
        **Email:** ${data.candidate_email || 'No detectado'}
        **Email enviado:** ${data.email_sent ? 'Sí ✅' : 'No ❌'}
            `.trim();
    }

  private addBotMessage(content: string): void {
    this.messages.update((msgs) => [
      ...msgs,
      {
        type: 'bot',
        content,
        timestamp: new Date(),
      },
    ]);
  }

  triggerFileInput(): void {
    document.getElementById('fileInput')?.click();
  }
}
