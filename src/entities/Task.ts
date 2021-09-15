class Task {
  title: string;
  description?: string;
  status: boolean;
  label?: string[];
  dueDate?: Date;
  attachment?: string[];
  constructor(title: string) {
    this.title = title;
    this.status = true;
    this.label = [];
  }
  toggleStatus() {
    this.status = !this.status;
  }
  addLabel(label: string) {
    this.label?.push(label);
  }
  setDueDate(date: Date) {
    this.dueDate = date;
  }
  addAttachments(attachment: string) {
    this.attachment?.push(attachment);
  }
}

export default Task;
