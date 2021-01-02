import {render} from '../index'

const clickTossHandler = (event) => {
    let target = event.target.closest('.dice');
    render()
}

export {clickTossHandler}