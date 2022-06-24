class Component {
	constructor(el) {
		this.el = document.getElementById(el)
	}
}

class Box extends Component {
	constructor(options) {
		super(options.el)
		this.el.style.width = options.width + "px"
		this.el.style.height = options.height + "px"
		this.el.style.background = options.color

	}
}

const box = new Box({
	el: "box",
	width: 100,
	height: 100,
	color: "red"
})