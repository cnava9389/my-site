import { createSignal, onCleanup, onMount } from "solid-js";
import {gsap} from 'gsap'
const Code = () => {
    const [option, setOption] = createSignal('a')
    const helper = () => {
        switch (option('')){
            case 'a': return <Code1/>
            case 'b': return <Code2/>
            case 'c': return <Code3/>
            default:
                return <Code1/>
        }
    }
    return (
        <div class='row h-100'>
            <div class='col-1 h-100 d-flex align-items-center'>
                <i onClick={()=>option()=='b'?setOption('a'):'' | option()=='c'?setOption('b'):''} class="h1 bi bi-chevron-double-left"/>
            </div>
            <div class='col'>
                {helper()}
            </div>
            <div class='col-1 h-100 d-flex align-items-center'>
                <i onClick={()=>option()=='b'?setOption('c'):'' | option()=='a'?setOption('b'):''} class="h1 bi bi-chevron-double-right"/>
            </div>
        </div>
    )
}

export default Code;

const Code1 = () => {
    let one
    onMount(()=>{
        gsap.from(one,{opacity:0})
    })
    return <div class='h-100' ref={one}>
        <div class='h-75 w-100'>
            <div >
                Go-Off
            </div>
            <div>
                I cannot show my code for the job here but the link is <a href="http://www.go-off.co" target='_blank'>www.go-off.co</a>.
                I built out the chatting system with web sockets, the mobile responsive version of the site, and re-structured the way state was being
                created/stored to utalize React's context manager.
            </div>
        </div>
            <div class='text-center'>
                <a href="http://www.go-off.co" target='_blank' class='btn btn-dark m-2'>Live Page</a>
                <a class='btn btn-dark m-2'>Code</a>
            </div>
    </div>
}
const Code2 = () => {
    let two
    onMount(()=>{
        gsap.from(two,{opacity:0})
    })
    return <div class='h-100' ref={two}>
    <div class='h-75 w-100'>
            <div >
                POS web-app
            </div>
            <div>
                This is a Point of Sales web app that was first built for a family food truck. The app is built with Solid js for the front-end, while the API and server are 
                built in python with FLask to fetch data and manage database connection; the API is built to not only work with this web app, but with other site clients that
                want to connect and set up online ordering. SocketIO is included with this to update other possible users in each business with newests tickets
                for that business.
            </div>
        </div>
            <div class='text-center'>
                <a href="#" target='_blank' class='btn btn-dark m-2'>Live Page</a>
                <a class='btn btn-dark m-2'>Code</a>
            </div>
    </div>
}
const Code3 = () => {
    let three
    onMount(()=>{
        gsap.from(three,{opacity:0})
    })
    return <div class='h-100' ref={three}>
        <div class='h-75 w-100'>
            <div >
                Las Delicias web-site
            </div>
            <div>
                This is a web-site for a family food truck, it was originally built with React then switched to Solid js. Users have the ability to browse the pages
                seemlessly, make online orders, or contact business, both on mobile and on desktop. Bootstrap was utilized creating responsive pages, and my POS web-app is the api that will allow
                users to create orders.
            </div>
        </div>
            <div class='text-center'>
                <a href="http://www.lasdelicias731.com" target='_blank' class='btn btn-dark m-2'>Live Page</a>
                <a class='btn btn-dark m-2'>Code</a>
            </div>
    </div>
}