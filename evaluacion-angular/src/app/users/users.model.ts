export class User {
  constructor(
    public id: string,
    public username: string,
    public name: string,
    public email: string,
    public avatarUrl: string,
    public role: string,
    public location: string,
    public repoIds: number[]
  ) {}
}