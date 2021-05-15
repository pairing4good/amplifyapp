function NoteForm(props) {
    return (
        <div>
            <input 
                data-testid="note-name-field"
                onChange={e => props.setFormDataCallback({ 
                    ...props.formData, 
                    'name': e.target.value}
                    )}
                placeholder="Note name"
                value={props.formData.name}/>
            <input data-testid="note-description-field" />
        </div>
    );
  }
  
  export default NoteForm;