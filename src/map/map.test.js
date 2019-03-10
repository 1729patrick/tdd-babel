import { expect } from 'chai'
import map from './map'

it('map should be a function', () => {
    expect(map).to.be.a('function')
})

it('map([1,2], (item)=> item) should return [1,2]', () => {
    expect(map([1,2], (item)=> item)).to.be.deep.equals([1,2])
});

it('map([3,4], (item)=> item) should return [3,4]', () => {
    expect(map([3,4], (item)=> item)).to.be.deep.equals([3,4])
});

it('map([1,2], (item)=> item + 1)) should return [2,3]', () => {
    expect(map([1,2], (item)=> item + 1)).to.be.deep.equals([2,3])
});

it('map([1,2], ((item, index) => index)) should return [0,1])', ()=> {
    expect(map([1,2], ((item, index) => index))).to.be.deep.equal([0,1])
})

it('map([1,2], ((item, index, array)=> array)) should return [[1,2], [1,2]]', ()=> {
    expect(map([1,2], ((item, index, array)=> array))).to.be.deep.equal([[1,2], [1,2]])
})

it('map() should be return []', ()=> {
    expect(map()).to.be.deep.equal([])
})

it('map([1,2]) should be return [1,2]', ()=> {
    expect(map([1,2])).to.be.deep.equal([1,2])
})

// it('map([1,2]) should return an error with message "func is not a function"', ()=> {
//     expect(map).to.throw(TypeError, "func is not a function")
// })