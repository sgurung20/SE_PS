package com.perscholas.notes.note.note;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.perscholas.notes.note.Note;

@Service
public class NoteHardcodedService {
	
	private static List<Note> notes = new ArrayList();
	private static int idCounter = 0;
	
	static {
		notes.add(new Note(++idCounter, "Name", "Note1", new Date()));
		notes.add(new Note(++idCounter, "Name", "Note2", new Date()));
		notes.add(new Note(++idCounter, "Name", "Note3", new Date()));
		
		
	}
	
	public List<Note> findAll(){
		return notes;
	}
	
	public Note save(Note note) {
		if(note.getId()==-1 || note.getId()==0) {
			note.setId(++idCounter);
			notes.add(note);
		}else {
			deleteById(note.getId());
			notes.add(note);
		}
		return note;
	}
	
	
	public Note deleteById(long id) {
		Note note = findById(id);
		if(note==null) return null;
		if(notes.remove(note)) {
			return note;
		}
		return null;
	}

	public Note findById(long id) {
		// TODO Auto-generated method stub
		for(Note note: notes) {
			if(note.getId() == id) {
				return note;
			}
		}
		return null;
	}
}
