<br>
<p align="center">
  <img alt="HackCU IV" src="https://github.com/HackCU/splash-page/blob/master/img/hackcu_black.png" width="200"/>
</p>
<br>

HackCU mentor website. Ticketing system to help hackers find available mentors.

Forked from [HELPq](https://github.com/ehzhang/HELPq). Read the original [README here](README.md). HELPq  is an extensible, customizable real-time queue system, built with [Meteor](https://www.meteor.com/)!

## Setup

Needs [meteor](https://www.meteor.com/) installed.

#### Mac OS X, Linux

```sh
  ./create_config
  meteor
```

#### Windows:

Copy the `private/config.json.template` into `private/config.json`

```sh
  meteor
```

Once done, add GitHub credentials for the HackCU Mentors app. It is owned by HackCU Github Organization.


## Run Server

### Local environment

```
meteor
```

## Deploy

To deploy we use [ulexus/meteor](https://hub.docker.com/r/ulexus/meteor/) docker image. You will need to have access to the server. To deploy a new version follow the instructions below:

1. `meteor build ../mentors_out/`
2. `cd ../mentors_out/`
3. `scp mentors.tar.gz user@hackupc.com:mentors/`
4. SSH into server as user and execute: `mentors/start_docker.sh`

### `start_docker.sh`

```sh
#!/bin/sh
echo "Killing previous container..."
docker kill $(docker ps -a | grep "ulexus/meteor" | cut -f1 -d" ")
echo "Removing exited containers..."
docker rm -v $(docker ps -a -q -f status=exited)
echo "Starting server..."
docker run -d -p 8007:8007 -e PORT="8007" -e ROOT_URL=https://mentors.hackupc.com   -e BUNDLE_FILE=/home/meteor/build.tar.gz   -v /home/user/mentors/mentors.tar.gz:/home/meteor/build.tar.gz   -e MONGO_URL=mongodb://your_mongo_url/mentors-hackupc  ulexus/meteor
```

----------------

Made with :heart: at HackCU

