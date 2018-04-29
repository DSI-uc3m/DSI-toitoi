export class Login {
    public id: string;
    public username: string;
    public password: string;
	public img: string;
	public saldo: number;
    constructor(us,pass, pic) {
        this.id=""+Date.now();
        this.username=us;
        this.password=pass;
		this.img=pic;
		this.saldo = 0;
    }
}