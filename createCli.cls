public with sharing class createCli {
    @AuraEnabled
    public static List<Cliente__c> getClientes(){
        try {
            return [SELECT Id, Nombre__c, Apellido__c, Email__c, Telefono__c FROM Cliente__c];    
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
      
    
    @AuraEnabled
    public static Cliente__c createCliente( Cliente__c cli) {
                try {
                    insert cli;
                    return cli;
                } catch (Exception e) {
                    throw new AuraHandledException(e.getMessage());
                }
    }
}
