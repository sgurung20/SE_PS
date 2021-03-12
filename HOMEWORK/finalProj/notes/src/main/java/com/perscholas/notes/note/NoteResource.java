package com.perscholas.notes.note;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.perscholas.notes.note.note.NoteHardcodedService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class NoteResource {
	
	@Autowired
	private NoteHardcodedService noteService;
	
	@GetMapping("/users/{user}/notes")
	public List<Note> getAllNotes(String name){
		//Thread.sleep(3000);
		return noteService.findAll();
	}
	
	@GetMapping("/users/{user}/notes/{id}")
	public Note getNote(@PathVariable String user, @PathVariable long id){
		//Thread.sleep(3000);
		return noteService.findById(id);
	}
	
	//DELETE /users/{name}/notes/{id}
	@DeleteMapping("/users/{username}/notes/{id}")
	public ResponseEntity<Void> deleteNote(@PathVariable String username, @PathVariable long id){
		
		Note note = noteService.deleteById(id);
		
		if(note!=null) {
			return ResponseEntity.noContent().build();
	}
			return ResponseEntity.notFound().build();
}
	@PutMapping("/users/{username}/notes/{id}")
	public ResponseEntity<Note> updateNote(
			@PathVariable String username,
			@PathVariable long id, @RequestBody Note note){
		
		Note noteUpdated = noteService.save(note);
		
		return new ResponseEntity<Note>(note, HttpStatus.OK);
		
	}
	
	@PostMapping("/users/{username}/notes")
	public ResponseEntity<Void> updateNote(
			@PathVariable String username, @RequestBody Note note){
		
		Note createdNote = noteService.save(note);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
		.path("{id}").buildAndExpand(createdNote.getId()).toUri();
		
		
		return ResponseEntity.created(uri).build();
		
	}
	
			
}
	
		
	
	
