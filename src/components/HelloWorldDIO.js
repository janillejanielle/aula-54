import HelloDev from './HelloDev';

// Declarando o componente de função
function HelloWorldDio(){

    //Retornando um componente HTML
    return (

        //Componente HTML que será renderizado no browser
        <div>
            <HelloDev />
            <p>Salve galera da DIO! Tudo beleza?</p>
        </div>

    )

}

//Exportar o componente Hello WorldDio para ser consumido em outros componentes ou páginas
export default HelloWorldDio