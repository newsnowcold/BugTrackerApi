//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DBLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class IssueAssignment
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int IssueId { get; set; }
    
        public virtual User User { get; set; }
        public virtual Issue Issue { get; set; }
    }
}
