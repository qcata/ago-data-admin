using agro_data_api.Data;
using agro_data_models.Generic;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace agro_data_api.Repository
{
    public class Repository<T> : IRepository<T> where T : Entity
    {
        private readonly AppDbContext _context;
        public Repository(AppDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(T item, bool applyChanges = true)
        {
            _context.Set<T>().Add(item);
            if (applyChanges)
            {
                await SaveChangesAsync();
            }
        }

        public IQueryable<T> Find(Expression<Func<T, bool>> predicate)
        {
            return _context.Set<T>().Where(predicate);
        }

        public IQueryable<T> GetAll()
        {
            return _context.Set<T>();
        }

        public async Task<T> GetByIdAsync<TId>(TId id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task RemoveAsync(T item, bool applyChanges = true)
        {
            _context.Set<T>().Remove(item);
            if (applyChanges)
            {
                await SaveChangesAsync();
            }
        }

        public async Task UpdateAsync(T item, bool applyChanges = true)
        {
            var entry = _context.Entry(item);
            if (entry != null && applyChanges)
            {
                await SaveChangesAsync();
            }
        }

        public async Task ReloadEntityAsync(T item)
        {
            await _context.Entry(item).ReloadAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
