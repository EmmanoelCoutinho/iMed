import React from 'react';

//import CSS
import '../styles/header.css'

function Header () {


    return(
            <div className="header">
                <div className="search">
                    <input placeholder='Procure seu remédio'/>
                    <button className='button'>Search</button>
                </div>
                <div className="links">
                    <a href={'teupai'}>Sobre</a>
                    <a href={'teupai'}>Produtos</a>
                    <a href={'teupai'}>Contatos</a>
                    </div>
            </div>
    );
}

export default Header;

