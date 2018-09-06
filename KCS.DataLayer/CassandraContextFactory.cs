using KCS.DataLayer.Interfaces;

namespace KCS.DataLayer
{
    public class CassandraContextFactory : ICassandraContextFactory
    {
        public ICassandraContext GetDseContext()
        {
            return new CassandraContext();
        }
    }
}
