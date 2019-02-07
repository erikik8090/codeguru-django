from django.contrib import admin
from codeguru_app.models import Code, Team, Result, Tournament
# Register your models here.
admin.site.register(Team)
admin.site.register(Code)
admin.site.register(Result)
admin.site.register(Tournament)