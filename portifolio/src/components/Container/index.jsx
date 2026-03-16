import styes from './Container.module.css'

function Container({ children }){
    return(
            <section className={styes.container}>
                {children}
            </section> 
    )
}

export default Container