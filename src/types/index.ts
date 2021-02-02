export interface WipoEvent {
  organizer: string,
  email: string,
  title: string,
  description: string,
  date: string,
  time: {
    start: string,
    end: string
  },
  languages: string[],
  country: string,
  link: string
}

export interface APIEvent {
  id: number,
  company: string,
  email: string,
  title: string,
  description: string,
  date: string,
  time: string,
  language_code_1: string,
  country_code: string,
  link: string,
  language_1: string,
  country: string,
}