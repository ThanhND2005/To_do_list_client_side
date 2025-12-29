class User {
  public id : string
  public name : string
  public gender: string
  public avatar: string 
  public constructor(id: string, name : string, gender : string, avatar : string){
    this.id=id 
    this.name = name 
    this.gender  = gender 
    this.avatar = avatar 
  }
}

export default User
