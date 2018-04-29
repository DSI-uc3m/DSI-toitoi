export class Obra {
    public id: string;
    public image: string;
    public username: string;
    public title: string;
    public description: string;
    public price: number;
    public notification: number;
	public authorID: string;
    constructor(im,us,tit,desc,pri, authorid) {
        this.id="";
        this.image=im;
        this.username=us;
        this.title=tit;
        this.description=desc;
        this.price=pri;
        this.notification = 0;
		this.authorID = authorid;
    }
}