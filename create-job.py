import jenkins

PATH = "jenkins-config.xml"

def read_xml_file(path):
        JENKINS_CONFIG_XML = open(path, "r+") 
        return JENKINS_CONFIG_XML.read()

def connect_to_jenkins():
        server = jenkins.Jenkins('http://localhost:8080', username='hardik', password='admin')
        user = server.get_whoami()
        version = server.get_version()
        print('Hello %s from Jenkins %s' % (user['fullName'], version))
        return server

def create_job(JENKINS_XML, server):
        server.create_job('job-deploy', JENKINS_XML)
        jobs = server.get_jobs()
        print(jobs)

server = connect_to_jenkins()
JENKINS_XML = read_xml_file(PATH)
create_job(JENKINS_XML, server)

