using Volo.Abp.Application.Services;
using TodoApp.Localization;
using Volo.Abp.Domain.Repositories;
using TodoApp.Entities;
using TodoApp.Services.Dtos;

namespace TodoApp.Services;

/* Inherit your application services from this class. */
public abstract class TodoAppAppService : ApplicationService
{
    protected TodoAppAppService()
    {
        LocalizationResource = typeof(TodoAppResource);
    }
}

