import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ICVAnalizarResponse } from '../interfaces/ichat-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CvAnalizerService {
  readonly BASE_API = environment.API_URL;
  readonly _http = inject(HttpClient);

  postAnaliceCv(file: File): Observable<ICVAnalizarResponse> {
    const formData = new FormData();
    formData.append('file', file);

    return this._http.post<ICVAnalizarResponse>(`${this.BASE_API}/bot/analyze-cv`, formData);
  }
}
