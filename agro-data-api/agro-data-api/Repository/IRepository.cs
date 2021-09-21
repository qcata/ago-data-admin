using agro_data_models.Generic;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace agro_data_api.Repository
{
    public interface IRepository<T> where T : IEntity
    {
        Task AddAsync(T item, bool applyChanges = true);
        Task RemoveAsync(T item, bool applyChanges = true);
        Task UpdateAsync(T item, bool applyChanges = true);
        Task ReloadEntityAsync(T item);
        IQueryable<T> GetAll();
        IQueryable<T> Find(Expression<Func<T, bool>> predicate);
        Task<T> GetByIdAsync<TId>(TId id);
        Task SaveChangesAsync();
    }
}
