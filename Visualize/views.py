from django.http import HttpResponse
from django.template import loader
from .models import RaidDetails
from .raid import getDisks

# Create your views here.
data = RaidDetails(submitted=False)
def index(request):
    template = loader.get_template('Visualize/index.html')  
    data.submitted = False
    data.level = 0
    context = { 
        'data' : data,
    }
    return HttpResponse(template.render(context,request))

def calculator(request):
    template = loader.get_template('Visualize/calculateDetails.html')  
    context = { 
    }
    return HttpResponse(template.render(context,request))


def add(request):
    flag = 0
    data.numDisks = int(request.POST['disk'])
    data.numRequest = int(request.POST['numreq'])
    data.writeFrac = int(request.POST['write'])
    data.level = int(request.POST['level'])
    data.submitted = True
    if(data.level == 10):
        flag = 1
        data.level = 1
    disks = getDisks(data)
    if(flag == 1):
        flag = 0
        data.level = 10

    template = loader.get_template('Visualize/index.html')
    context = { 
        'data' : data,
        'disk' : disks
    }
    return HttpResponse(template.render(context,request))
      
