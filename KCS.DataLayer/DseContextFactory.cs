using KCS.DataLayer.Interfaces;

namespace KCS.DataLayer
{
    public class DseContextFactory : IDseContextFactory
    {
        public IDseContext GetDseContext()
        {
            return new DseContext();
        }
    }
}
