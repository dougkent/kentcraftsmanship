using System;
using System.Collections.Generic;

namespace KCS.Core.Exceptions
{
    public class ReCaptchaException : Exception
    {
        public ReCaptchaException(List<string> errorCodes)
            : base(FormatErrorCodes(errorCodes))
        {
        }

        public ReCaptchaException() { }

        private static string FormatErrorCodes(List<string> errorCodes)
        {
            return string.Join(",", errorCodes);
        }
    }
}