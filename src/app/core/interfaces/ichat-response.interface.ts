export interface ICVAnalizarResponse {
  overall_score:          number;
  is_valid_candidate:     boolean;
  is_university_graduate: boolean;
  is_software_developer:  boolean;
  is_from_peru:           boolean;
  has_github:             boolean;
  has_portfolio:          boolean;
  years_experience:       number;
  candidate_email:        string;
  education_institution:  string;
  professional_summary:   string;
  education_score:        number;
  format_score:           number;
  experience_score:       number;
  skills_score:           number;
  extras_score:           number;
  positive_points:        string[];
  improvements:           string[];
  critical_errors:        any[];
  suggestions:            string[];
  email_sent:             boolean;
}



export interface ChatMessage {
  type: 'user' | 'bot' | 'loading';
  content: string;
  timestamp: Date;
  data?: ICVAnalizarResponse;
  fileName?: string;
}
