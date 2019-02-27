using System;

namespace KCS.Core.Exceptions
{
    public class AirtableException : Exception
    {
        public AirtableException(string message)
        : base(message)
        {

        }

        public AirtableException() { }
    }
}