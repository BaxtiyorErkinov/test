const obj = {
  name: "Baxa",
  id: 1,
  age: 18
}


function a() {
  console.log(this)
}

obj.fn = a

obj.fn()
