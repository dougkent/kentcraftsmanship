namespace KCS.DataLayer.Interfaces
{
    public interface ICassandraContextFactory
    {
        ICassandraContext GetCassandraContext();
    }
}
