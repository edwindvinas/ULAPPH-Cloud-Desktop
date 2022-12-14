# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

apiVersion: apps/v1
kind: Deployment
metadata:
  name: ulapph-cloud-desktop
  labels:
    app: ulapph-cloud-desktop
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ulapph-cloud-desktop
  template:
    metadata:
      labels:
        app: ulapph-cloud-desktop
    spec:
      containers:
      - name: ulapph-cloud-desktop
        image: gcr.io/GOOGLE_CLOUD_PROJECT/ulapph-cloud-desktop:COMMIT_SHA
        ports:
        - containerPort: 8080
---
kind: Service
apiVersion: v1
metadata:
  name: ulapph-cloud-desktop
spec:
  selector:
    app: ulapph-cloud-desktop
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: LoadBalancer