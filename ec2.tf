resource "aws_default_vpc" "default_vpc" {
  tags = {
    "Name" = "default vpc"
  }
}

data "aws_availability_zones" "available_zones" {}

resource "aws_default_subnet" "default_az1" {
  availability_zone =  data.aws_availability_zones.available_zones.names[0]

  tags = {
    Name = "default subet"
  }
}

resource "aws_security_group" "ec2_security_group" {
  name = "ec2 security group"
  description = "ec2 security group"
  vpc_id = aws_default_vpc.default_vpc.id

  ingress {
    description = "https access"
    from_port = 443
    to_port = 433
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  ingress {
    description = "http access"
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  ingress {
    description = "ssh access"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = -1
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  tags = {
    Name = "ec2 security group"
  }
}

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "ec2_instance" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  subnet_id = aws_default_subnet.default_az1.id
  vpc_security_group_ids = [ aws_security_group.ec2_security_group.id ]
  key_name = "ec2-key-pair"
  user_data = file("deploy.sh")

  tags = {
    Name = "GR-RESQ-UI"
  }
}