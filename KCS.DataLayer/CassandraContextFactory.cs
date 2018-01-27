using KCS.DataLayer.Interfaces;

namespace KCS.DataLayer
{
    public class CassandraContextFactory : ICassandraContextFactory
    {
        public ICassandraContext GetCassandraContext()
        {
            return new CassandraContext();
        }
    }
}
