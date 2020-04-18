import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { newRowTable } from '../../animations';

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.css'],
  animations: [newRowTable]
})
export class ImagesUploadComponent implements OnInit {

  @Output() changeFiles = new EventEmitter<File[]>();
  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFile(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.files.push(...files);
    }
    this.changeFiles.emit(this.files);
  }

  deleteFile(file: File) {
    this.files = this.files.filter(x => x.name !== file.name);
    this.changeFiles.emit(this.files);
  }

}
