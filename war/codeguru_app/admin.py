from django.contrib import admin
from codeguru_app.models import Code, Team, Result, Tournament
from django.http import HttpResponseRedirect
from django.urls import reverse, path
from django.template import loader


# Register your models here.
@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('user',)

@admin.register(Code)
class CodeAdmin(admin.ModelAdmin):
    list_display = ('id', 'warrior1', 'warrior2')

@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = ('id', 'round', 'team', 'score') 


@admin.register(Tournament)
class TournamentAdmin(admin.ModelAdmin):
    list_display = ('name', 'active', 'rounds', 'tournament_actions')
    readonly_fields = ('rounds', 'tournament_actions')
    
    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path('<int:tournament_id>/reset_tournament', self.admin_site.admin_view(self.reset_view), name='reset_tournament')
        ]
        return my_urls + urls
    
    def tournament_actions(self, obj):
        template = loader.get_template('admin/tournament/tournament_action.html')
        return template.render({'url': reverse('admin:reset_tournament',args=[obj.id]) })

    tournament_actions.short_description = 'Tournament Actions'
    tournament_actions.allow_tags = True

    def reset_view(self, request, tournament_id, *args, **kwargs):
        Tournament.objects.get(id=tournament_id).reset()
        return HttpResponseRedirect(request.GET['prev'])


   