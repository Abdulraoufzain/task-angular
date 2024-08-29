import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  searchTerm: string = '';

  newRoom: Room = { id: 0, number: '', type: 'single' };

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((data: Room[]) => {
      this.rooms = data;
      this.filteredRooms = data;
    });
  }

  filterRooms() {
    this.filteredRooms = this.rooms.filter(room =>
      room.number.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      room.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSubmit() {
    this.newRoom.id = this.rooms.length ? Math.max(...this.rooms.map(r => r.id)) + 1 : 1;
    this.roomService.addRoom(this.newRoom).subscribe((room) => {
      this.rooms.push(room);
      this.filterRooms();
      this.newRoom = { id: 0, number: '', type: 'single' }; // Reset the form
    });
  }


  deleteRoom(id: number) {
    this.roomService.deleteRoom(id).subscribe(() => {
      this.rooms = this.rooms.filter(room => room.id !== id);
      this.filterRooms();
    });
  }
}