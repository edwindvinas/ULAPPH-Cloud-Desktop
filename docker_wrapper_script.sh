#!/bin/bash
echo "Welcome to ULAPPH - Docker Wrapper Script!!!"
echo "Running SeaweedFS...master"
/go/bin/weed master &
echo "Running SeaweedFS...starting volume server 1..."
/go/bin/weed volume -dir="/data/seaweedfs" -max=10  -mserver="169.254.172.2:9333" -port=7070 &
echo "SeaweedFS now running in background at port 9333/7070..."

echo "Running tiedot..."
/go/bin/tiedot -mode=httpd -dir="/data/tiedot" -port=6060 &
echo "Tiedot now running in background at port 6060..."

echo "Create indexes in TDSMEDIA in MEDIA_ID column..."
curl "http://169.254.172.2:6060/all"
curl "http://169.254.172.2:6060/create?col=TDSMEDIA"
curl "http://169.254.172.2:6060/indexes?col=TDSMEDIA"
curl "http://169.254.172.2:6060/index?col=TDSMEDIA&path=MEDIA_ID"

echo "Create indexes in TDSARTL in DOC_ID column..."
curl "http://169.254.172.2:6060/all"
curl "http://169.254.172.2:6060/create?col=TDSARTL"
curl "http://169.254.172.2:6060/indexes?col=TDSARTL"
curl "http://169.254.172.2:6060/index?col=TDSARTL&path=DOC_ID"

echo "Create indexes in TDSSLIDE in DOC_ID column..."
curl "http://169.254.172.2:6060/all"
curl "http://169.254.172.2:6060/create?col=TDSSLIDE"
curl "http://169.254.172.2:6060/indexes?col=TDSSLIDE"
curl "http://169.254.172.2:6060/index?col=TDSSLIDE&path=DOC_ID"

echo "Starting AWS SSM Agent..."
/opt/amazon/ssm/amazon-ssm-agent start &

echo "Running ULAPPH..."
ls -la /go/src/acn/ULAPPH-Cloud-Desktop
/go/src/acn/ULAPPH-Cloud-Desktop/ulapph --port 8443 --host 0.0.0.0
echo "ULAPPH is now running backround at port 8443..."
