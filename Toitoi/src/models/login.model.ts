export class Login {
    public id: string;
    public username: string;
    public password: string;
	public img: string;
    constructor(us,pass, pic) {
        this.id="";
        this.username=us;
        this.password=pass;
		this.img=pic;
    }
}