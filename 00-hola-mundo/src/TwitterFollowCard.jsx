import {useState} from 'react';

//exportamos la funcion que parametrizara de forma dinamica el componente
export function TwitterFollowCard({ children, userName = 'unknown' }) {
    /*el useState nos sirve para guardar una variable que nos diga si estamos o no estamos
    siguiendo a la persona*/
    const [isFollowing, setIsFollowing] = useState(false);
    //estados de los botones
     const text = isFollowing ? 'Siguiendo' : 'Seguir';
     const buttonClassName = isFollowing 
     ? 'tw-followCard-button is-following'
     : 'tw-followCard-button';

     const handleClick = () => {
        setIsFollowing(!isFollowing);
     }

    //variable para la imagen utilizando el userName
    const imageSrc = `https://unavatar.io/${userName}`;
    return (
        //siempre es className en vez de class
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img
                    className='tw-follow-card-avatar'
                    src={imageSrc} alt="avatar de andres" />
                <div className='tw-follow-card-info'>
                    {children}
                    <span className='tw-follow-card-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}