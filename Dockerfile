# Use the offical Golang image to create a build artifact.
# This is based on Debian and sets the GOPATH to /go.
# https://hub.docker.com/_/golang
#FROM golang:1.13 
FROM golang:1.16 

# Copy local code to the container image.
WORKDIR /go/src/acn/ULAPPH-Cloud-Desktop
COPY . .

RUN export GOPATH=~/go

# Fetching dependencies
RUN ["bash", "gogetall.sh"]

# Build the command inside the container.
RUN export GO111MODULE=off
#RUN CGO_ENABLED=0 GOOS=linux go build -v -o main 
RUN GO111MODULE=off go build main.go

# Use a Docker multi-stage build to create a lean production image.
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
#FROM alpine
#RUN apk add --no-cache ca-certificates

# Copy the files from the builder stage to deployable image
#COPY --from=builder /go/src/acn/ULAPPH-Cloud-Desktop/main /main
#COPY --from=builder /go/src/acn/ULAPPH-Cloud-Desktop/ /
#COPY /go/src/acn/ULAPPH-Cloud-Desktop/ /

RUN apt-get update && \
    apt-get install -y openssl && \
    openssl genrsa -des3 -passout pass:x -out server.pass.key 2048 && \
    openssl rsa -passin pass:x -in server.pass.key -out server.key && \
    rm server.pass.key && \
    openssl req -new -key server.key -out server.csr \
        -subj "/C=UK/ST=Warwickshire/L=Leamington/O=OrgName/OU=IT Department/CN=example.com" && \
    openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

#RUN cp -R . /

# Remove go source codes
RUN mv /go/src/acn/ULAPPH-Cloud-Desktop/main /go/src/acn/ULAPPH-Cloud-Desktop/ulapph
RUN rm /go/src/acn/ULAPPH-Cloud-Desktop/*.go*

# Install Tiedot
RUN mkdir -p /go/src/github.com/edwindvinas
#RUN go get -v -d tiedot
WORKDIR /go/src/github.com/edwindvinas
RUn git clone https://github.com/edwindvinas/tiedot.git
#RUN cd /go/src/github.com/edwindvinas && CGO_ENABLED=0 GOOS=linux go install -a -installsuffix cgo -v tiedot
RUN cd /go/src/github.com/edwindvinas/tiedot && GO111MODULE=off go build main.go
RUN cp /go/src/github.com/edwindvinas/tiedot/main /go/bin/tiedot
RUN chmod +x /go/bin/tiedot
RUN mkdir -p /data/tiedot

# Install SeaweedFS
RUN apt-get -y install g++ fuse wget
RUN mkdir -p /go/src/github.com/chrislusf/
WORKDIR /go/src/github.com/chrislusf/
#RUN git clone https://github.com/chrislusf/seaweedfs
#ARG BRANCH=${BRANCH:-master}
#RUN cd /go/src/github.com/chrislusf/seaweedfs && git checkout $BRANCH
#RUN cd /go/src/github.com/chrislusf/seaweedfs/weed \
#  && export LDFLAGS="-X github.com/chrislusf/seaweedfs/weed/util.COMMIT=$(git rev-parse --short HEAD)" \
#  && GO111MODULE=off CGO_ENABLED=0 go install -ldflags "-extldflags -static ${LDFLAGS}"
#
#RUN cp /go/bin/weed /go/bin/
RUN wget https://github.com/chrislusf/seaweedfs/releases/download/2.96/linux_amd64_large_disk.tar.gz
RUN tar -xvf linux_amd64_large_disk.tar.gz
#RUN ls -la linux_amd64_large_disk
RUN cp weed /go/bin/weed
RUN chmod +x /go/bin/weed
RUN mkdir -p /etc/seaweedfs
RUN mkdir -p /data/seaweedfs
#RUN cp /go/src/github.com/chrislusf/seaweedfs/docker/filer.toml /etc/seaweedfs/filer.toml

# AWS Session Manager
RUN mkdir /tmp/ssm
RUN cd /tmp/ssm
RUN wget https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/debian_amd64/amazon-ssm-agent.deb
RUN sudo dpkg -i amazon-ssm-agent.deb
RUN sudo systemctl enable amazon-ssm-agent

# AWS Session Manager
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install -yq \
    lsb-release \
    curl

ENV AGENT_URL https://amazon-ssm-us-east-1.s3.amazonaws.com/latest/debian_amd64/amazon-ssm-agent.deb

RUN curl ${AGENT_URL} -o amazon-ssm-agent.deb && \
    dpkg -i amazon-ssm-agent.deb && \
    rm -f amazon-ssm-agent.deb

# Prep scripts
WORKDIR /go/src/acn/ULAPPH-Cloud-Desktop
RUN chmod +x /go/src/acn/ULAPPH-Cloud-Desktop/docker_wrapper_script.sh
#RUN chmod 777 /templates

#Expose port
EXPOSE 8080 6060 9333 7070 8443 18080 18888 8888 19333 8333 7333

# Define volumes
VOLUME ["/data/seaweedfs"]
VOLUME ["/data/tiedot"]

# Run the web service on container startup.
CMD /go/src/acn/ULAPPH-Cloud-Desktop/docker_wrapper_script.sh
