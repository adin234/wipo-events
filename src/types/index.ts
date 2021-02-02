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