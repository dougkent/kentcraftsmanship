namespace KCS.DataLayer.Interfaces
{
    public interface ICassandraContextFactory
    {
        ICassandraContext GetDseContext();
    }
}
