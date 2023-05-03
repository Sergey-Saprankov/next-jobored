export interface DataSchema {
  access_token: string
  refresh_token: string
  ttl: number | null
  expires_in: number | null
  token_type: string
  reg_user_resumes_count: number | null
}
export interface MainPageSchema {
  data: DataSchema
}
