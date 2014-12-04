using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Aspectize.Core;

namespace Clipboard
{
    public static class ServiceName
    {
        public const string DataService = "DataService";
        public const string UtilService = "UtilService";
    }

    public static class Utilities
    {
        public static string GenerateUniqueCode(IDataManager dm)
        {
            Random rnd = new Random();

            string newCode = rnd.Next(0, 999999).ToString().PadLeft(6, '0');

            Clipboard mpWithSameCode = dm.GetEntity<Clipboard>(new QueryCriteria(Clipboard.Fields.AccessCode, ComparisonOperator.Equal, newCode));

            while (mpWithSameCode != null)
            {
                newCode = rnd.Next(0, 999999).ToString().PadLeft(6, '0');
                mpWithSameCode = dm.GetEntity<Clipboard>(new QueryCriteria(Clipboard.Fields.AccessCode, ComparisonOperator.Equal, newCode));
            }

            return newCode;
        }
    }
}