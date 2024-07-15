/**
* Componente fusion entre Title y Form
*/
import React, {useState, useRef} from "react";
import { SpotifyPlayer } from "./SpotifyPlayer";
import {v4 as uuid} from 'uuid';
export const MyPlaylist = () => {
    const [playlist, setPlaylist] = useState([
        {id: uuid(), url:'1kZGpaXOeB48TPT2JatjvC', favorite: true},
        {id: uuid(), url:'1l9KyIfIlT6f8YIImGIu84', favorite: true},
        {id: uuid(), url:'4ntKjf6cT8MdAn1RGsWj6a', favorite: true},
        {id: uuid(), url:'1Cf5ZIMxdIYC60Cz7Q4GZg', favorite: true},
        {id: uuid(), url:'6stiuKcmwiRK2JccwoGnhn', favorite: true},
    ]);

    const urlRef = useRef(null);
    const favoriteRef = useRef(null);

    const addSong = () => {
        if (urlRef.current.value.trim() !== '' && favoriteRef.current){
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;

        const newSong = {
            id: uuid(),
            url: url,
            favorite: favorite
        };

        setPlaylist([...playlist, newSong]);
        alert('Se agregó canción')
        
        urlRef.current.value = '';
        favoriteRef.current.checked = false;
    } else if (urlRef.current.value.trim() === '') {
        alert('Campo vacío, debe ingresar una url')
    } else{
        console.error('Error: Referencias no asignadas correctamente')
    }};

    const removeNonFavorites = () => {
        setPlaylist(playlist.filter(song => song.favorite));
        alert('Se eliminaron no favoritos')
    };

    const setFavorite = (id) => {
        setPlaylist(playlist.map(song => song.id === id ? {...song, favorite: !song.favorite} : song))
    }

    return (
        <div className='container mt-5'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeHolder='Ingrese el codigo
    del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>
                        Favorite
                    </label>
                </div>
                <button className='btn btn-success ms-2' onClick={addSong}><i class="bi bi-check-circle"></i></button>
                <button className='btn btn-danger ms-2' onClick={removeNonFavorites}><i class="bi bi-trash"></i></button>
            </div>
            <div>
                {playlist.map(song => (<div className='col-md-6 mb-3' key={song.id}> <SpotifyPlayer url={song.url} favorite={song.favorite} setFavorite={() => setFavorite(song.id)} /></div>
                ))}
            </div>
        </div>
    )
    }