# Environment
Amazon Linux 2

# Set Up
## yum update & install & OS reboot

```
$ sudo yum update -y
$ sudo yum install -y gcc gcc-c++ make git openssl-devel bzip2-devel zlib-devel readline-devel libffi-devel sqlite-devel patch mariadb-server mariadb-devel zsh util-linux-user tmux
$ sudo reboot
```

## anyenv install

```
$ git clone https://github.com/riywo/anyenv ~/.anyenv
$ echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bashrc
$ echo 'eval "$(anyenv init -)"' >> ~/.bashrc
$ exec $SHELL -l
$ anyenv install --init
$ exec $SHELL -l
```

## nodenv install

```
$ anyenv install -l
```

```
$ anyenv install nodenv
```

## Node.js install

```
$ nodenv install --list
```

```
$ nodenv install {over v 8.11}
```

```
$ nodenv rehash
```

```
$ nodenv local {over v 8.11}
```

## Typescript install & update

```
$ npm install -g typescript
```

```
$ npm i -g aws-cdk
```

```
$ exec $SHELL -l
$ tsc --version
$ cdk --version
```

# make project

```
$ cdk init app --language=typescript
```

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
