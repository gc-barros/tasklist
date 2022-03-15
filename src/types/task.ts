export default interface ITask {
  guid: string;
  refId?: string;
  title: string;
  description: string;
  situation: "uncompleted" | "completed";
}
