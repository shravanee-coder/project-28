class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treewidth=450;
		this.treeheight=600;
		this.treethickness=10;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treewidth, this.treethickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.treeheight/2, this.treethickness, this.treeheight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.treewidth/2, this.y-this.treeheight/2, this.treethickness, this.treeheight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeheight/2,this.treewidth, this.treeheight)
			pop()
			
	}

}