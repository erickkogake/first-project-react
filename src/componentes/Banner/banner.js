import './banner.css'

function Banner() {
    return(
    <header className='banner'>
    <img src='/imagens/banner.png' alt='imagem-banner' />
    </header>
    )
}

//não podemos usar class para definir uma classe no css, pois estamos utilizando JSX.
//para definir uma classe em JSX, usamos o className
export default Banner;