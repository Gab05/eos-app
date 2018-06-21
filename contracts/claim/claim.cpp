#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;

class claim: public contract {
    using contract::contract

    public:
        claim( account_name self ) :
            contract(self){}

        // @abi action
        void test( name sender ){
            print('Hello');
        }

    private:

};

EOSIO_ABI( claim, (test) )