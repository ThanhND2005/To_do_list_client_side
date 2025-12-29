class Task {
  public id : string
  public idTask : string
  public title : string
  public description : string 
  public constructor(id : string, idTask : string, title : string, description : string)
  {
    this.id = id 
    this.idTask = idTask 
    this.title = title 
    this.description = description
  }
}

export default Task